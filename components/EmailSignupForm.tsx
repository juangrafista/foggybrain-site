import Script from "next/script";

const FORM_ID = "9704183";
const FORM_UID = "e4a150e617";

export default function EmailSignupForm() {
  return (
    <>
      <form
        action={`https://app.kit.com/forms/${FORM_ID}/subscriptions`}
        method="post"
        data-sv-form={FORM_ID}
        data-uid={FORM_UID}
        className="seva-form formkit-form mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-start"
      >
        <ul
          data-element="errors"
          data-group="alert"
          className="formkit-alert order-3 w-full list-none p-0 text-[0.85rem] text-rose empty:hidden sm:order-none"
        />
        <div
          data-element="fields"
          className="seva-fields formkit-fields flex w-full flex-col gap-3 sm:flex-row"
        >
          <input
            className="formkit-input w-full rounded-full border border-line bg-white px-5 py-3 text-[0.98rem] text-ink placeholder:text-soft focus:border-rose focus:outline-none"
            name="email_address"
            aria-label="Email Address"
            placeholder="you@email.com"
            required
            type="email"
          />
          <button
            data-element="submit"
            className="formkit-submit shrink-0 rounded-full bg-ink px-6 py-3 text-[0.98rem] font-semibold text-mist transition-colors hover:bg-rose"
          >
            <span>Join the beta list</span>
          </button>
        </div>
      </form>
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="afterInteractive" />
    </>
  );
}
