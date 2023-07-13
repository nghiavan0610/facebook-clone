import { Header, Sidebar, Feed, RightSidebar } from '@/components';
import { getServerSession } from 'next-auth/next';
import { Login } from '../components';
import { OPTIONS } from './api/auth/[...nextauth]/route';

export default async function Home() {
    const session = await getServerSession(OPTIONS);
    if (!session) return <Login />;
    return (
        <div>
            <Header user={session.user} />
            <main className="flex bg-gray-100">
                {/* Left Sidebar */}
                <Sidebar user={session.user} />
                {/* Feed */}
                <Feed user={session.user} />
                {/* Right Sidebar */}
                <RightSidebar />
            </main>
        </div>
    );
}
