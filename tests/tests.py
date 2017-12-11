#!/usr/bin/env python3
import pytest
from requests import Session

sess = Session()

def test_landing():
    """ Tests the landing page response """
    landing = sess.get("https://eyetoeye.video/")
    assert landing.status_code == 200 and landing.text

def test_no_profile_before_login():
    """ Tests that trying to go to profile before login redirects to facebook """
    profile = sess.get("https://eyetoeye.video/profile")
    last_request = profile.history[-1]
    assert "www.facebook.com" in last_request.url