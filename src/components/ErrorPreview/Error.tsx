interface ErrorPreviewProps {
  error: string;
}

const ErrorPreview = ({ error }: ErrorPreviewProps) => {
  return <div>{error}</div>;
};

export default ErrorPreview;
