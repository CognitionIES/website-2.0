import { Card } from "../ui/card";

function AboutSection() {
  return (
    <div>
      <section className="">
        <div className="relative flex flex-col items-center justify-center min-h-screen  text-gray-900 font-sans">
          <div className="max-w-4xl px-6 py-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 drop-shadow-md">
              About Our Services
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-xl text-gray-700">
              We provide a wide range of services tailored to meet your needs.
            </p>
          </div>
          <div className="max-w-2xl px-6 py-12 text-center">
            <p className="text-gray-600">
              We provide 3 major services: Staffing & Recruitment, Build &
              Operate, and SaaS Solutions. Each service is designed to empower
              your business with the right talent, robust technology platforms,
              and scalable software solutions.
            </p>
          </div>
        </div>
        <div>
          <Card>
            <div className="p-6 flex flex-col cols-span-4 space-y-4">
              <h2 className="text-2xl font-bold mb-4">Our Major Services</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Staffing & Recruitment:</strong> We connect
                  exceptional talent with forward-thinking businesses,
                  delivering tailored recruitment & staffing solutions that
                  build strong, high-performing teams.
                </li>
                <li>
                  <strong>Build & Operate:</strong> From concept to daily
                  operations, we design, build, & manage robust technology
                  platforms & infrastructure that drive reliability,
                  scalability, & long-term value.
                </li>
                <li>
                  <strong>SaaS Solutions:</strong> We deliver secure,
                  cloud-based applications that streamline processes, improve
                  efficiency, and empower your business to thrive in a rapidly
                  evolving digital landscape.
                </li>
              </ul>
              <div></div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
export default AboutSection;
