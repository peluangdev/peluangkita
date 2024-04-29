import LoginPage from '@/components/auth/LoginPage';
import Image from 'next/image';
import Link from 'next/link';
export default function Login() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl bg-white shadow-xl rounded-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 ">
          <div className="flex flex-col rounded-xl bg-primary justify-center items-center">
            <h1 className="text-gray-100">Selamat Datang di</h1>
            <Link href="/">
              <Image
                src="/images/Logo-White.png"
                width={300}
                height={100}
              />
            </Link>
          </div>
          <LoginPage />
        </div>
      </div>
    </div>
  );
}
