interface FormResponseProps {
  type: 'dark' | 'link' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  message: string;
  size?: 'small' | 'normal' | 'medium' | 'large';
}

export const FormResponse: React.FC<FormResponseProps> = ({
  type,
  title,
  message,
  size = 'small',
}) => {
  return (
    <div className={`message is-${type} is-${size}`}>
      {title && (
        <div className="message-header">
          <p>{title}</p>
        </div>
      )}
      <div className="message-body">{message}</div>
    </div>
  );
};
