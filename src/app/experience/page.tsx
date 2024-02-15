export default function Page() {
    return <>
        <div className="md:mt-20 mt-10 md:mb-10 mb-28 mx-5 md:flex md:justify-center">
            <div className="border-2 border-current w-full md:w-1/2 p-10 rounded bg-white">
                <h4 className="font-bold text-xl">Work Experience</h4>
                <div className="my-5">
                    <div className="flex justify-between">
                        <div className="block">
                            <p className="font-bold">PT Floo Integra Digital</p>
                            <p className="">Fullstack Developer </p>
                        </div>
                        <p>Okt 2021 - Nov 2023</p>
                    </div>
                    <ul className="list-disc ml-4 text-sm">
                        <li>Meet with client for solve the problem and report work progress</li>
                        <li>Become the lead or pic project to handle and deliver to client</li>
                        <li>Building any web-based application according to client request</li>
                        <li>Maintance existing system from client</li>
                        <li>Uses PHP, Laravel, VueJs,Mysql,Eloquent to maximise the development speed and user experience of the web-based application</li>
                        <li>Uses CI/CD from Github Action for to make deployment easier</li>
                    </ul>
                </div>
                <div className="my-5">
                    <div className="flex justify-between">
                        <div className="block">
                            <p className="font-bold">CV Yuk Karya Bersama </p>
                            <p className="">Web Developer </p>
                        </div>
                        <p>Jan 2021 - Okt 2021</p>
                    </div>
                    <ul className="list-disc ml-4 text-sm">
                        <li>Building any web-based application according to client request</li>
                        <li>Maintance existing system from client</li>
                        <li>Uses PHP, Laravel, Mysql,Eloquent to maximise the development speed and user experience of the web-based application</li>
                    </ul>
                </div>

            </div>

        </div>
    </>
}