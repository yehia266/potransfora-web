
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POTRANSFORA CORE</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        body { background-color: #030712; color: white; }
        .mega-menu { display: none; }
        .group:hover .mega-menu { display: block; }
    </style>
</head>
<body class="min-h-screen">
    <header class="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <nav class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div class="flex items-center space-x-8">
                <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">POTRANSFORA</span>
                <div class="relative group h-full flex items-center">
                    <button class="text-gray-400 hover:text-white flex items-center space-x-1 cursor-default">
                        <span>Product</span>
                        <i data-lucide="chevron-down" class="w-4 h-4"></i>
                    </button>
                    <div class="mega-menu absolute top-full left-0 w-[400px] bg-[#0d1117] border border-white/10 rounded-xl shadow-2xl p-4 mt-2">
                        <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">New Tool</div>
                        <div class="grid grid-cols-1 gap-1">
                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <main class="flex items-center justify-center py-20">
        <div class="text-center">
            <h1 class="text-5xl font-extrabold mb-4 tracking-tighter">POTRANSFORA CORE</h1>
            <p class="text-gray-400">Summoning Sovereign Identity...</p>
        </div>
    </main>

    <script>lucide.createIcons();</script>
</body>
</html>
