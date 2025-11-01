import Icon from '@/components/ui/icon';
import { BlogPostData } from './blogPostsData';

interface BlogPostHeaderProps {
  post: BlogPostData;
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-4">
          {post.category}
        </span>
        <h1 className="text-4xl font-bold text-white mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-white/80 text-sm">
          <span className="flex items-center gap-1">
            <Icon name="Calendar" size={16} />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="Clock" size={16} />
            {post.readTime}
          </span>
        </div>
      </div>
    </div>
  );
}
