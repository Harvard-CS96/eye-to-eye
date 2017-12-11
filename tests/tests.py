#!/usr/bin/env python3
import pytest
from requests import Session

sess = Session()

def test_landing():
    """ Tests the landing page response """
    landing = sess.get("https://eyetoeye.video/")
    assert landing.status_code == 200 and landing.text

def test_no_anonymous_chat():
    """ Tests that users must be logged in to chat """
    client = sess.get("https://eyetoeye.video/chat")
    assert "facebook.com" in client.url
