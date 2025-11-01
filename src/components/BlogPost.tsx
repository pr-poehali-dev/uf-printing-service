import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { fullPosts } from './blog/blogPostsData';
import BlogPostHeader from './blog/BlogPostHeader';
import BlogPostContent from './blog/BlogPostContent';
import BlogPostActions from './blog/BlogPostActions';

interface BlogPostProps {
  postId: number;
  onBack: () => void;
}

export default function BlogPost({ postId, onBack }: BlogPostProps) {
  const post = fullPosts[postId];

  if (!post) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">Статья не найдена</p>
        <button
          onClick={onBack}
          className="mt-4 text-primary hover:underline"
        >
          Вернуться к блогу
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8 group"
      >
        <Icon name="ArrowLeft" size={20} className="group-hover:-translate-x-1 transition-transform" />
        Вернуться к блогу
      </button>

      <Card className="overflow-hidden animate-fade-in">
        <BlogPostHeader post={post} />

        <CardContent className="p-6 md:p-12 lg:p-16">
          <BlogPostContent content={post.content} />
          <BlogPostActions onBack={onBack} />
        </CardContent>
      </Card>
    </div>
  );
}
