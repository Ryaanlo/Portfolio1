import Image from 'next/image';
import { education } from '@/data/config';
import { useTheme } from 'next-themes';

export default function Education() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mb-20">
      <h1 className="mt-5 mb-4">{education.title}</h1>
      <p className="text-lg">{education.desc}</p>
    </div>
  );
}