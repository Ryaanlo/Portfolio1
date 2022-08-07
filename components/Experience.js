import Image from 'next/image';
import { experience } from '@/data/config';
import { useTheme } from 'next-themes';

export default function Experience() {
  const { theme, setTheme } = useTheme();
  return (
  <div className="">
        <div className="overflow-x-hidden w-full">
          <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
            {experience.title}
          </h2>
        </div>
        <p className="text-lg">{experience.desc}</p>
        <div className=" mt-8">
          {experience.experience.map((item, index) => {
            return (
              <ul class = "a"
                key={index}
                //className="p-6 border border-lightText rounded-xl mb-4"
              >
                <li class="item one">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul class="list">
                    {item.jobdes}
                  </ul>
                </li>

              </ul>
            );
          })}
        </div>
      </div>
  );
}