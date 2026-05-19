"use client";

import React from "react";
import SplitForm from "./variants/SplitForm";
import MinimalContact from "./variants/MinimalContact";
import DarkContact from "./variants/DarkContact";

const variants = {
  "split-form": SplitForm,
  "minimal-contact": MinimalContact,
  "dark-contact": DarkContact
};

export default function Contact({ variant = "split-form", data = {} }) {
  const Component = variants[variant] || SplitForm;
  return <Component data={data} />;
}
