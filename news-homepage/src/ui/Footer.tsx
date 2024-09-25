export function Footer() {
  return (
    <footer className="bg-very-dark-blue text-white py-4 text-center mt-32">
      <p className="text-lg font-semibold">Worker News</p>
      <p>All rights reserved &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
