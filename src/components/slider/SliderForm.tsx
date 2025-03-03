import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  title: string;
  subtitle: string;
  linktitle: string;
  urllink: string;
  urlicons: string;
  languages: string;
  logo: File | null;
  image: File | null;
  display: boolean;
}

const SliderForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    subtitle: '',
    linktitle: '',
    urllink: '',
    urlicons: '',
    languages: 'English',
    logo: null,
    image: null,
    display: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files?.[0] : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData); // Handle form submission here (e.g., send to an API)
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="p-6 space-y-2 rounded-4xl"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="languages" className="block text-gray-700 font-bold mb-2">
            Languages
          </label>
          <select
            id="languages"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="English">English</option>
            {/* Add more languages here */}
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>

        <div>
          <label htmlFor="subtitle" className="block text-gray-700 font-bold mb-2">
            Subtitle
          </label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="logo" className="block text-gray-700 font-bold mb-2">
            Logo
          </label>
          <input type="file" id="logo" name="logo" onChange={handleChange} className="py-2" />
        </div>

        <div>
          <label htmlFor="linktitle" className="block text-gray-700 font-bold mb-2">
            Link Title
          </label>
          <input
            type="text"
            id="linktitle"
            name="linktitle"
            value={formData.linktitle}
            onChange={handleChange}
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image
          </label>
          <input type="file" id="image" name="image" onChange={handleChange} className="py-2" />
        </div>

        <div>
          <label htmlFor="urllink" className="block text-gray-700 font-bold mb-2">
            URL Link
          </label>
          <input
            type="text"
            id="urllink"
            name="urllink"
            value={formData.urllink}
            onChange={handleChange}
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="display" className="text-gray-700 font-bold mr-2">
            Display
          </label>
          <input type="checkbox" id="display" name="display" checked={formData.display} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="urlicons" className="block text-gray-700 font-bold mb-2">
            URL Icons
          </label>
          <input
            type="text"
            id="urlicons"
            name="urlicons"
            value={formData.urlicons}
            onChange={handleChange}
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
      >
        Submit
      </button>
    </motion.form>
  );
};

export default SliderForm;