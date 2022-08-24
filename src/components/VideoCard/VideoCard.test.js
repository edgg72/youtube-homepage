import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard'

test('VideoCard elements exist', () => {
  render(<VideoCard />);
  const videoTitle = screen.getByRole("VideoTitle");
  const channelName = screen.getByRole("ChannelName");
  expect(videoTitle).toBeInTheDocument();
  expect(channelName).toBeInTheDocument();
});
