interface PageProps {
  children?: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

const LayoutContainer: React.FC<PageProps> = (props: PageProps) => {
  const { className, fluid } = props;
  const finalClassName = [`Layout__container`];

  if (className) finalClassName.push(className);
  if (fluid) finalClassName.push(`Layout__container--fluid`);
  
  return (
    <div className={finalClassName.join(' ')}>
      { props.children }
    </div>
  );
};

export default LayoutContainer;