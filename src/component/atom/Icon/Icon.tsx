import {
  PlusCircleIcon,
  PencilAltIcon,
  TrashIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid';
import { IconProps } from './Icon.type';

export const Icon: React.FC<IconProps> = ({ type }) => {
  switch (type) {
    case 'plus':
      return (
        <PlusCircleIcon className='w-8 text-primary-600 duration-300 hover:text-primary-700' />
      );
    case 'edit':
      return <PencilAltIcon className='w-8 text-primary-600 duration-300 hover:text-primary-700' />;
    case 'trash':
      return <TrashIcon className='w-8 text-primary-600 duration-300 hover:text-primary-700' />;
    case 'check':
      return (
        <CheckCircleIcon className='w-8 text-primary-600 duration-300 hover:text-primary-700' />
      );
    case 'cancel':
      return <XCircleIcon className='w-8 text-primary-600 duration-300 hover:text-primary-700' />;
    default:
      return null;
  }
};
