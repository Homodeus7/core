import { PrismaClient } from "@/generated/prisma";
import { Button } from "@/shared/components/ui/button";

const client = new PrismaClient();

export default async function Home() {
  const courses = await client.course.findMany();

  console.log({ courses });
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Button>Button</Button>
    </div>
  );
}
