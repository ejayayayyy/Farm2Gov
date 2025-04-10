import Link from "next/link";
import Image from "next/image";

export default function CreateAccount() {
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
            <Image
              src="/images/farm2gov.png"
              alt="Farm2Gov Logo"
              height={80}
              width={80}
            />
          </div>
          <div className="flex items-center text-2xl justify-center font-medium">
            Create your account
          </div>
        </div>

        {/* input fields */}
        <div className="">
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Role
              </label>
              <div className="flex w-full items-center gap-4">
                <div className="flex flex-col gap-2">
                  <select
                    id="fruit"
                    name="fruit"
                    className="px-4 py-2 outline-none rounded-lg border border-gray-300"
                  >
                    <option value="apple">Farmer</option>
                    <option value="banana">Government</option>
                  </select>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="px-4 py-2 rounded-lg outline-none border border-gray-300"
                    placeholder="Enter role details"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Name
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your name"
                className="px-4 py-2 rounded-lg outline-none border border-gray-300"
              />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Email
              </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg outline-none border border-gray-300"
              />
            </div>

            {/* <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Address
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your name"
                className="px-4 py-2 rounded-lg outline-none border border-gray-300"
              />
            </div> */}

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
                Confirm password
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Re-enter your password"
                className="px-4 py-2 rounded-lg outline-none border border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors duration-150 cursor-pointer"
              >
                Create account
              </button>

              <div className="flex items-baseline gap-2">
                <input
                  type="checkbox"
                  id="reading"
                  name="hobby"
                  value="reading"
                />
                <label for="reading" className="text-xs text-gray-500">
                  By creating an account, you agree to our Terms and Conditions
                  and Privacy Policy Please review them carefully before
                  proceeding.
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Create account */}
        <div className="flex items-center justify-center text-sm mt-4">
          <span className="text-gray-500">
            Already have an account?{" "}
            <Link href="/" className="text-green-500">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
