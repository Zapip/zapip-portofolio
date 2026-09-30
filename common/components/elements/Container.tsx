interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  [propName: string]: React.ReactNode | string | undefined;
}

const Container = ({ children, className = "", ...others }: ContainerProps) => {
  return (
    <section className={`mt-20 flex flex-col items-center justify-center gap-6 p-6 ${className} `} {...others}>
      {children}
    </section>
  );
};

export default Container;