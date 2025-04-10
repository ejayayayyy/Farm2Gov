import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      {" "}
      <div className="flex flex-col bg-white rounded-xl p-10 shadow w-full max-w-md gap-8">
        {/* logo */}
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-2 items-center">
            <div className="p-8 h-20 w-20 bg-red-500"></div>
          </div>
          <div className="flex items-center text-2xl justify-center font-medium">
            Forgot password
          </div>
          <span className="text-gray-500 text-center">
            Enter your email address below and we’ll send you a link to reset
            your password.
          </span>
        </div>

        {/* input fields */}
        <div className="">
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Email
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your email here"
                className="px-4 py-2 rounded-lg outline-none border border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Link
                href="/reset-password"
                className="px-4 py-2 rounded-lg bg-green-500 text-center text-white hover:bg-green-600 transition-colors duration-150"
              >
                Send verification code
              </Link>

              <Link
                href="/"
                className="px-4 py-2 rounded-lg text-center text-green-500 hover:bg-gray-300/20 transition-colors duration-150"
              >
                Go back to Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
