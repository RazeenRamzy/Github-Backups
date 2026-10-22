import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MLibrarian from './MLibrarian';

jest.mock('axios');

describe('MLibrarian Component', () => {
  it('should fetch and display recommended books', async () => {
    const mockSearchHistory = ['arts', 'game and animation', 'cooking', 'software', 'java'];
    const mockResponse = {
      data: {
        items: [
          { id: 1, volumeInfo: { title: 'Book 1', imageLinks: { thumbnail: 'image1.jpg' } } },
          { id: 2, volumeInfo: { title: 'Book 2', imageLinks: { thumbnail: 'image2.jpg' } } },
        ],
      },
    };

    axios.get.mockResolvedValueOnce(mockResponse);

    render(<MLibrarian />);

    expect(screen.getByText('No recommended books found.')).toBeInTheDocument();

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        'https://www.googleapis.com/books/v1/volumes?q=arts+game+and+animation+cooking+software+java&key=YOUR_API_KEY&maxResults=15'
      );
    });

    expect(screen.getByText('Recommended Books:')).toBeInTheDocument();
    expect(screen.getByText('Book 1')).toBeInTheDocument();
    expect(screen.getByText('Book 2')).toBeInTheDocument();
    expect(screen.getByAltText('Book 1')).toHaveAttribute('src', 'image1.jpg');
    expect(screen.getByAltText('Book 2')).toHaveAttribute('src', 'image2.jpg');
  });

  // Add more test cases as needed
});
