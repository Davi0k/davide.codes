export default function NotFound() {
  return null;
}

export const getStaticProps = () => ({
  redirect: {
    destination: "/"
  }
});