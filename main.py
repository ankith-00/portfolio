import streamlit as st 
from pathlib import Path


# - - - - - ADDING CSS FILE - - - - - - - - - - - - - - - - - - - - - - -  -> 
current_dir = Path(__file__).parent if "__file__" in locals() else Path.cwd()
css_file = current_dir / "main.css"



























# - - - - - - APPLYING CSS - - - - - - - - - ->
with open(css_file) as f:
    st.markdown('<style>{}</style>'.format(f.read()), unsafe_allow_html=True)