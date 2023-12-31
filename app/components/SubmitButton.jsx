"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disable={pending} className="btn-primary">
      {pending && <span>Submitting...</span>}
      {!pending && <span>Submit</span>}
    </button>
  );
}
