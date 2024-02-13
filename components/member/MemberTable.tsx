import MemberRow from "./MemberRow";

interface props {
    members: any[];
}

export default function MemberTable({ members }: props) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full rounded-xl overflow-hidden">
                <thead className="bg-secondary">
                    <tr>
                        <th
                            scope="col"
                            className="text-sm font-medium text-primary px-6 py-4 text-left"
                        >
                            #
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-primary px-6 py-4 text-left"
                        >
                            ชื่อ
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-primary px-6 py-4 text-left"
                        >
                            อีเมล
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-primary px-6 py-4 text-left"
                        >
                            ยศ
                        </th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-secondary">
                    {members.map((m, i) => (
                        <MemberRow key={i} member={m} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
