function Home() {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white ">
      <main className="flex  max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
        <div className="space-y-5">
          <h1 className="text-base font-semibold md:text-2xl">ABOUT</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            My name is phorn sopheak. I am from kandal province, Currently I am
            live in phnom penh city. I am web developer. and I am studying at
            Asia Euro University.
          </p>
        </div>
        <div className="space-y-10">
          <h1 className="text-base font-semibold md:text-2xl">EXPERIENCE</h1>
          <div className="flex flex-col lg:flex-row lg:gap-20">
            <ul>
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="text-lg font-semibold">junior Labeler</span>
                <span className="font-light">Company Digital Divide Data</span>
                <span className="text-sm text-gray-400">2022-2023</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil sed voluptatem, quia dolorum quas sequi animi, eos
                  repellat iste autem sapiente sint quam facere, laborum
                  suscipit incidunt aspernatur quibusdam reprehenderit.
                </p>
              </li>
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="text-lg font-semibold">
                  junior Web developer
                </span>
                <span className="font-light">Company IGrow Tech</span>
                <span className="text-sm text-gray-400">2023-2024</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil sed voluptatem, quia dolorum quas sequi animi, eos
                  repellat iste autem sapiente sint quam facere, laborum
                  suscipit incidunt aspernatur quibusdam reprehenderit.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-3xl space-y-8 ">
          <h1 className="text-base font-semibold md:text-2xl">CERTIFICATES</h1>
          <div className="space-y-10">
            <div className="text-baseline space-y-3">
              <h3>Certificates of attendance in DDD (2023) </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                laborum. Laboriosam dolore vitae veritatis eveniet totam
                voluptatibus ipsam ad, quibusdam obcaecati aut corrupti dolorem,
                ut hic, a soluta ipsa ab.
              </p>
            </div>

            <div className="text-baseline space-y-3">
              <h3>Certificates of attendance in IGrow Tech (2023) </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                laborum. Laboriosam dolore vitae veritatis eveniet totam
                voluptatibus ipsam ad, quibusdam obcaecati aut corrupti dolorem,
                ut hic, a soluta ipsa ab.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl space-y-10 ">
          <h1 className="text-base font-semibold md:text-2xl">STRENGTH</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            Friendly and confident to talk with new people Motivate
            Responsibility Patient and strong communication Hard Working.
          </p>
        </div>
        <div className="max-w-3xl space-y-10 ">
          <h1 className="text-base font-semibold md:text-2xl">INTERESTING</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            Enjoy to work as a team Voluntary work Passionate in working with
            people.
          </p>
        </div>

        <div className=" space-y-10 ">
          <h1 className="text-base font-semibold md:text-2xl">REFERENCE</h1>
          <div className="flex flex-wrap gap-18">
            <div className="text-baseline space-y-1">
              <h3 className="text-lg font-light">Web Developer</h3>
              <h2 className="text-base font-semibold md:text-2xl">
                Mr Chun Chamnan Staff at IGrow Tech.
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Phone: 0713567907.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Email: chun.chamnan.kh@gmail.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
