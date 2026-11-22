"""Tarayici araci, model routing ve kritik bug regresyon testleri."""

from pathlib import Path
from unittest.mock import patch

from agentv2.araclar import tarayici


def test_tarayici_hafif_ekran_does_not_raise_name_error(tmp_path):
    hedef_png = str(tmp_path / "shot.png")
    with patch("agentv2.araclar.tarayici.subprocess.run") as mock_run:
        res = tarayici._hafif("ekran", "", hedef_png)
    assert hedef_png in res
    assert mock_run.called


def test_tarayici_hafif_ekran_falls_back_to_hedef_or_default():
    with patch("agentv2.araclar.tarayici.subprocess.run"):
        res_default = tarayici._hafif("ekran")
        res_hedef = tarayici._hafif("ekran", "ozel.png")
    assert "ekran.png" in res_default
    assert "ozel.png" in res_hedef


def test_egit_kod2_compiles_and_imports_getpass():
    src = Path(__file__).resolve().parent.parent / "egitim" / "egit_kod2.py"
    code = src.read_text(encoding="utf-8")
    compile(code, str(src), "exec")
    assert "from getpass import getpass" in code
    assert "model, tokenizer, _ = yukle_model()" in code
