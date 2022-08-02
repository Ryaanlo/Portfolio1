import Image from 'next/image';
import { experience } from '@/data/config';
import { useTheme } from 'next-themes';

export default function Experience() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mb-20">
      <h1 className="mt-5 mb-4">{experience.title}</h1>
      <p className="text-lg">{experience.desc}</p>
    </div>
  );
}