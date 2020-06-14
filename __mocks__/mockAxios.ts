import axios from 'axios';

export const mockAxios = (items: any) => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  return mockedAxios.get.mockResolvedValue({
    data: {
      items,
    },
  });
};
