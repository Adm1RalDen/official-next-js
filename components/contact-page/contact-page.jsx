import Link from 'next/link'
import React from 'react'
import Button from '../_elements/button'
import Input from '../_elements/input'
import Textarea from '../_elements/textarea'

const ContactPage = () => {
  return (
    <div className="Contact-page">
      <div className="Contact-page__img">CONTACT</div>
      <div className="Contact-page__wrapper">
        <div className="Contact-page__info-wrapper">
          <div className="Contact-page__info">Info</div>
          <div className="Contact-page__location">
            <span>31 Victory street</span>
            <span>ZHYTOMYR</span>
            <span>10000</span>
            <span>UKRAINE</span>
            <span>-</span>
          </div>
          <div className="Contact-page__contact">
            <span>Call +38(099)312-34-24</span>
            <span>
              Email{' '}
              <Link href="expertise">
                <a>itchance@gmail.com</a>
              </Link>
            </span>
          </div>
        </div>
        <div className="Contact-page__form">
          <span>Send a message</span>
          <form>
            <label>
              Name
              <Input placeholder="Basic usage" />
            </label>
            <label>
              Email
              <Input placeholder="Basic usage" />
            </label>
            <label>
              Message
              <Textarea />
            </label>
            <Button name="Send" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
