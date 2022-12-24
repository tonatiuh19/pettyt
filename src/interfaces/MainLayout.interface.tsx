export interface MainLayout {
  children: React.ReactNode;
  headers: HeaderLayout;
}

interface HeaderLayout {
  title: string;
  content: string;
}
