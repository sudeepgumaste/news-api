import trackUserActivity from "./track-user-activity";

describe('trackUserActivity', () => {
  it('should be called with correct arguments', () => {
    const consoleLogSpy = vi.spyOn(console, 'log');

    const action = 'read-more';
    const details = {
      q: 'example query',
      title: 'Example Title',
      description: 'Example Description',
      url: 'https://example.com',
      publishedAt: '2024-07-25T12:00:00Z',
      source: { name: 'Example Source' },
    };

    trackUserActivity(action, details);

    expect(consoleLogSpy).toHaveBeenCalledWith(action, details);

    consoleLogSpy.mockRestore();
  });
});