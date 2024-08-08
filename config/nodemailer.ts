import nodemailer from 'nodemailer';

const user = {
  email: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
};

const { email, pass } = user;

const { createTransport } = nodemailer;
export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email
};