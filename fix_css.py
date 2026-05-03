
import os

filepath = 'css/style.css'
try:
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()

    # Truncate at line 2736 (keep first 2736 lines, which are indices 0 to 2735)
    clean_lines = lines[:2736]

    fixed_css = """
/* ==========================================================================
   Vitalia Pharmacy Module Specialized Styles
   ========================================================================== */

.pharma-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 20px;
    border: 2px solid transparent;
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
    text-align: center;
    gap: 4px;
}

.pharma-btn-blue {
    background: #EFF6FF;
    color: #2563EB;
    border-color: #DBEAFE;
}
.pharma-btn-blue:hover {
    background: #2563EB;
    color: white;
    box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.3);
}

.pharma-btn-orange {
    background: #FFF7ED;
    color: #EA580C;
    border-color: #FFEDD5;
}
.pharma-btn-orange:hover {
    background: #EA580C;
    color: white;
    box-shadow: 0 10px 20px -5px rgba(234, 88, 12, 0.3);
}

.pharma-btn-indigo {
    background: #EEF2FF;
    color: #4F46E5;
    border-color: #E0E7FF;
}
.pharma-btn-indigo:hover {
    background: #4F46E5;
    color: white;
    box-shadow: 0 10px 20px -5px rgba(79, 70, 229, 0.3);
}

.pharma-btn-emerald {
    background: #ECFDF5;
    color: #059669;
    border-color: #D1FAE5;
}
.pharma-btn-emerald:hover {
    background: #059669;
    color: white;
    box-shadow: 0 10px 20px -5px rgba(5, 150, 105, 0.3);
}

.pharma-btn-slate {
    background: #F8FAFC;
    color: #475569;
    border-color: #F1F5F9;
}
.pharma-btn-slate:hover {
    background: #475569;
    color: white;
    box-shadow: 0 10px 20px -5px rgba(71, 85, 105, 0.3);
}

.animate-slide-up {
    animation: slideUp 0.4s ease-out forwards;
}

@keyframes slideUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-scale-in {
    animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes scaleIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}

.animate-fade-in {
    animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.cursor-zoom-in { cursor: zoom-in; }
.cursor-zoom-out { cursor: zoom-out; }

/* Standard Scrollbars for Firefox/Others */
* {
    scrollbar-width: thin;
    scrollbar-color: #CBD5E1 transparent;
}

/* Chrome/Safari/Edge Scrollbars (already handled in some components but for global consistency) */
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: #CBD5E1;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #94A3B8;
}
"""

    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(clean_lines)
        f.write(fixed_css)

    print("SUCCESS: FIXED_STYLE_CSS")
except Exception as e:
    print(f"ERROR: {str(e)}")
