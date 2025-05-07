// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('123-456-7890 is a phone number', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('(123)456-7890 is a phone number', () => {
  expect(isPhoneNumber("(123)456-7890")).toBe(true);
});

test('1234567890 is not a phone number', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

test('123 456 7890 is not a phone number', () => {
  expect(isPhoneNumber("123 456 7890")).toBe(false);
});


test('hi@gmail.com is an email', () => {
  expect(isEmail("hi@gmail.com")).toBe(true);
});

test('hi@ucsd.edu is an email', () => {
  expect(isEmail("hi@ucsd.edu")).toBe(true);
});

test('1234567890 is not an email', () => {
  expect(isEmail("1234567890")).toBe(false);
});

test('gmail.com is not an email', () => {
  expect(isEmail("gmail.com")).toBe(false);
});


test('ABCDEFG is a strong password', () => {
  expect(isStrongPassword("ABCDEFG")).toBe(true);
});

test('e7han is a strong password', () => {
  expect(isStrongPassword("e7han")).toBe(true);
});

test('1234567890 is not a strong password', () => {
  expect(isStrongPassword("1234567890")).toBe(false);
});

test('gmail.com is not a strong password', () => {
  expect(isStrongPassword("gmail.com")).toBe(false);
});


test('1/5/2025 is a date', () => {
  expect(isDate("1/5/2025")).toBe(true);
});

test('11/28/1952 is a date', () => {
  expect(isDate("11/28/1952")).toBe(true);
});

test('1234567890 is not a date', () => {
  expect(isDate("1234567890")).toBe(false);
});

test('gmail.com is not a date', () => {
  expect(isDate("gmail.com")).toBe(false);
});



test('999 is a hex color', () => {
  expect(isHexColor("999")).toBe(true);
});

test('A2A31A is a hex color', () => {
  expect(isHexColor("A2A31A")).toBe(true);
});

test('1234567890 is not a hex color', () => {
  expect(isHexColor("1234567890")).toBe(false);
});

test('gmail.com is not a hex color', () => {
  expect(isHexColor("gmail.com")).toBe(false);
});