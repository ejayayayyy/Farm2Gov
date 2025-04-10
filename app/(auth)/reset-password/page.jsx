import Link from "next/link";

export default function ResetPassword() {
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
            Reset password
          </div>
          <span className="text-gray-500 text-center">
            Enter your new password below. Make sure it's strong and something
            you'll remember.
          </span>
        </div>

        {/* input fields */}
        <div className="">
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Password
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter atleast 8 characters"
                className="px-4 py-2 rounded-lg outline-none border border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Confirm
              </label>

              <input
                type="password"
                name=""
                id=""
                placeholder="Re-enter your password"
                className="px-4 py-2 rounded-lg outline-none border border-gray-300"
              />
            </div>

            <Link
              href="/"
              className="px-4 py-2 rounded-lg bg-green-500 text-white text-center hover:bg-green-600 transition-colors duration-150"
            >
              Reset password
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
