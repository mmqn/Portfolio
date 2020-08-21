import convertMarkdown from 'marked';

export default async ({ storyId, setContent }) => {
  try {
    const contentPath = `https://raw.githubusercontent.com/mmqn/portfolio_stories/master/${storyId}/${storyId}.md`;

    const response = await fetch(contentPath);
    const content = await response.text();
    const convertedContent = convertMarkdown(content);

    setContent(convertedContent);
  } catch (error) {
    console.error(error);
  }
};
