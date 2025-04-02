// -> Imports -> Components
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

interface FormResponseProps {
  type: 'success' | 'info' | 'warning' | 'error';
  title?: string;
  message: string;
}

export const FormResponse: React.FC<FormResponseProps> = ({ type, title, message }) => {
  return (
    <Alert severity={type}>
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
};
