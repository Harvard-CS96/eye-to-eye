#!/usr/bin/env python3
import pytest
import browsercookie
from requests import Session

@pytest.fixture(scope="module")
def anon_sess(request):
    anon_sess = Session()
    return anon_sess

@pytest.fixture(scope="module")
def login_sess(request):
    login_sess = Session()
    cookies = browsercookie.load()
    login_sess.cookies = cookies
    return login_sess

def test_landing(anon_sess):
	""" Tests the landing page response """
	landing = anon_sess.get("https://eyetoeye.video/")
	assert landing.status_code == 200 and landing.text

def test_no_feedback(anon_sess):
	""" Tests that a user can't get to feedback"""
	feedback = anon_sess.get("https://eyetoeye.video/feedback")
	assert feedback.status_code == 200 and feedback.text

def test_about(anon_sess):
    """ Tests the about page response """
    about = anon_sess.get("https://eyetoeye.video/about")
    assert about.status_code == 200 and about.text

def test_tou(anon_sess):
    """ Tests the TOU page response """
    tou = anon_sess.get("https://eyetoeye.video/terms-of-use")
    assert tou.status_code == 200 and tou.text

def test_no_anonymous_chat(anon_sess):
    """ Tests that users must be logged in to chat """
    client = anon_sess.get("https://eyetoeye.video/chat")
    assert "facebook.com" in client.url

def test_no_connections_util(anon_sess):
    """ Tests that https://eyetoeye.video/connections is unavailable"""
    connections = anon_sess.get("https://eyetoeye.video/connections")
    assert connections.status_code == 404

def test_no_matcher_log_util(anon_sess):
    """ Tests that https://eyetoeye.video/matcher-log is unavailable"""
    matcher_log = anon_sess.get("https://eyetoeye.video/matcher-log")
    assert matcher_log.status_code == 404

def test_no_profile(anon_sess):
    """ Tests that trying to go to profile before login redirects to facebook """
    profile = anon_sess.get("https://eyetoeye.video/profile")
    assert "www.facebook.com" in profile.url

def test_no_leaderboard(anon_sess):
    """ Tests that trying to get the leaderboard before login redirects to facebook """
    profile = anon_sess.get("https://eyetoeye.video/profile/leaderboard")
    assert "www.facebook.com" in profile.url

def test_no_history(anon_sess):
    """ Tests that getting chat history before login redirects to facebook """
    profile = anon_sess.get("https://eyetoeye.video/profile/chats")
    assert "www.facebook.com" in profile.url

def test_no_profile_info(anon_sess):
    """ Tests that getting user's profile details before login redirects to facebook """
    profile = anon_sess.get("https://eyetoeye.video/profile/user")
    assert "www.facebook.com" in profile.url

def test_chat(login_sess):
    chat = login_sess.get("https://eyetoeye.video/chat")
    assert chat.status_code == 200 and "www.facebook.com" not in chat.url and chat.text
