import { FaFacebook,FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-12 mx-auto">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div class="sm:col-span-2">
                        <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>

                        <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />

                            <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div>
                        <p class="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                            <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</a>
                            <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</a>
                        </div>
                    </div>

                    <div>
                        <p class="font-semibold text-gray-800 dark:text-white">Industries</p>

                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Retail & E-Commerce</a>
                            <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Information Technology</a>
                            <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Finance & Insurance</a>
                        </div>
                    </div>
                </div>

                <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

                <div class="flex items-center justify-between">
                    <p className="flex items-center gap-3 text-3xl">
                        <img class="w-auto h-7" src="https://i.ibb.co/7NgsV6t8/logo.png" alt="" />
                        <span>Jj Tourism</span>
                    </p>

                    <div class="flex -mx-2 text-3xl">
                        <a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                            <FaLinkedin />
                        </a>

                        <a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                            <FaFacebook />
                        </a>

                        <a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;