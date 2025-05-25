import React from 'react';
import { Edit3 } from 'lucide-react';
import toast from 'react-hot-toast';

interface EditButtonProps {
  section: string;
}

const EditButton: React.FC<EditButtonProps> = ({ section }) => {
  const handleEdit = () => {
    // This would be replaced with actual edit functionality
    toast.success(`Edit ${section} coming soon!`);
  };

  return (
    <button
      onClick={handleEdit}
      className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label={`Edit ${section}`}
    >
      <Edit3 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
    </button>
  );
};

export default EditButton;