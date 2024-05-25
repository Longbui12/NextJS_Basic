export const metadata = {
  title: "Blog Lists",
  description: "This is page display all blogs",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
