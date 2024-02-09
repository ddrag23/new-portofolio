export default function Page() {
    return <>
        <div className="flex items-center content-center justify-center flex-col h-full mt-20 w-full">
            <div className="border-2 border-current w-1/2 p-10 rounded h-[29rem] overflow-auto">
                <p className="font-bold text-xl">About Me</p>
                <p>I'm passionate about building innovative software solutions that solve real-world problems and improve people's lives. With a background in computer science and several years of industry experience, I thrive in dynamic environments where I can collaborate with talented teams to deliver high-quality software products.</p>
                <p className="font-bold">Technical Expertise</p>
                <p>I have a strong foundation in software development, with expertise in:</p>
                <ul>
                    <li><span className="font-bold">Programming Languages:</span> Proficient in languages such as PHP, Typescript, and JavaScript, Golang with experience in developing scalable and maintainable code.</li>
                    <li><span className="font-bold">Web Development:</span> Skilled in building responsive web applications using modern frameworks like Vuejs and React.js, as well as backend services with Node.js and Express.js and php framework such as Laravel or Codeigniter.</li>
                    <li>
                        <span className="font-bold">Database Management:</span> Experienced in designing and optimizing relational and NoSQL databases, including MySQL, PostgreSQL, MongoDB, and Redis.
                    </li>
                    <li>
                        <span className="font-bold">Deployment :</span> Familiar using VPS (Virtual Private Server) or Shared Hosting.
                    </li>
                </ul>
            </div>

        </div>
    </>
}