import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageCard from '../components/ImageCard';

describe('ImageCard', () => {
  const mockImgName = {
    image: 'test-image.jpg',
    name: 'Test name',
  };

  it('renders the image and name correctly', () => {
    render(<ImageCard imgName={mockImgName} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', mockImgName.image);
    expect(imgElement).toHaveAttribute('alt', mockImgName.name);

    const nameElement = screen.getByText(mockImgName.name);
    expect(nameElement).toBeInTheDocument();
  });

  it('renders the image with correct aspect ratio', () => {
    render(<ImageCard imgName={mockImgName} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveClass('aspect-square');
  });
});
