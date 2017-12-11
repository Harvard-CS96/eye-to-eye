import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import time
import csv

fb_email = "wenvablupn_1509998226@tfbnw.net"
fb_password = "tester"

driver = webdriver.Firefox(executable_path='/Users/samplank/Downloads/geckodriver')
driver.get('https://eyetoeye.video/')

fb_login = driver.find_element_by_xpath("//*[contains(text(), 'Continue with Facebook')]")

fb_login.click()

email = driver.find_element_by_id("email")
password = driver.find_element_by_id("pass")

email.send_keys(fb_email)
password.send_keys(fb_password)

login_button = driver.find_element_by_id("loginbutton")

login_button.click()

cookies = driver.get_cookies()

session_id = cookies[0]['value']

print(session_id)

