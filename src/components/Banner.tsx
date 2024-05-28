export default function Banner() {
    return (
        <div className="p-6 py-2 bg-black text-white">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-4xl tracking-tighter font-bold">
                        <br className="sm:hidden" />
                        50% de descuento en todos los perfumes
                    </h2>
                    <div className="space-x-2 text-center py-2 lg:py-0">
                        <span>Adicional envío gratis usando este código:</span>
                        <span className="font-bold text-lg">MARIPURI</span>
                    </div>
                </div>
            </div>
        </div>
    );
}