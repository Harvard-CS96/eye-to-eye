#!/usr/bin/env python3
import pytest
from requests import Session

sess = Session()

def test_landing():
	""" Tests the landing page response """
	landing = sess.get("https://eyetoeye.video/")
	assert landing.status_code == 200 and landing.text

def test_no_feedback():
	""" Tests that a user can't get to feedback"""
	feedback = sess.get("https://eyetoeye.video/feedback")
	assert feedback.status_code == 200 and feedback.text

def test_about():
    """ Tests the about page response """
    about = sess.get("https://eyetoeye.video/about")
    assert about.status_code == 200 and about.text

def test_tou():
    """ Tests the TOU page response """
    tou = sess.get("https://eyetoeye.video/terms-of-use")
    assert tou.status_code == 200 and tou.text

def test_no_anonymous_chat():
    """ Tests that users must be logged in to chat """
    client = sess.get("https://eyetoeye.video/chat")
    assert "facebook.com" in client.url
