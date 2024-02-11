import Loading from "@/components/Loading";

export default function loading() {
    return (
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/10">
            <Loading />
        </div>
    );
}
