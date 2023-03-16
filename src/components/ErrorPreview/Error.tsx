import "./index.scss";

interface ErrorPreviewProps {
  error: string;
}

const ErrorPreview = ({ error }: ErrorPreviewProps) => {
  return <div className="error">{error}</div>;
};

export default ErrorPreview;
