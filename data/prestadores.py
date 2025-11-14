import pandas as pd
import json
from pathlib import Path

# === CONFIGURACIÓN ===
INPUT_XLSX = f'{"/Users/gonavalos/Documentos/Gonzalo/Preme/preme-web-next/data/prestadoresparajson.xlsx"}'
SHEET_NAME = 0  # o el nombre de la hoja
OUTPUT_JSON = "/Users/gonavalos/Documentos/Gonzalo/Preme/preme-web-next/data/prestadores2.json"

# Mapeo de nombre de plan en el Excel → texto final en JSON
PLAN_LABELS = {
    "Plan Maximo": "Plan Máximo",
    "Plan Máximo": "Plan Máximo",
    "Plan Integral": "Plan Integral",
    "Plan Coral": "Plan Coral",
}

def incluye_plan(value):
    """
    Convierte 'Si' / 'SI' / 'sí' / 'Sí' → True.
    Cualquier otra cosa → False.
    """
    if isinstance(value, str):
        v = value.strip().lower()
        return v in {"si", "sí", "x", "1"}
    if isinstance(value, (int, float)):
        return value == 1
    return False

def safe_int(v):
    """Convierte a int o devuelve None si está vacío / NaN."""
    try:
        if pd.isna(v):
            return None
        return int(v)
    except Exception:
        return None

def main():
    df = pd.read_excel(INPUT_XLSX, sheet_name=SHEET_NAME)

    items = []
    for idx, row in df.iterrows():
        # ID: si no existe columna id, usamos el índice + 1
        if "id" in df.columns:
            id_value = safe_int(row.get("id"))
            if id_value is None:
                id_value = idx + 1
        else:
            id_value = idx + 1

        # Nombre y tipo
        nombre = str(row.get("Nombre", "")).strip()
        tipo = str(row.get("Tipo de Prestador", "")).strip()

        # Planes
        planes = []
        for col_excel, label_json in PLAN_LABELS.items():
            if col_excel in df.columns and incluye_plan(row.get(col_excel)):
                planes.append(label_json)

        # Datos de ubicación y contacto
        ciudad = str(row.get("Localidad", "")).strip()
        direccion = str(row.get("Domicilio", "")).strip()
        telefono = str(row.get("Telefono", "")).strip()

        # Prioridades
        orden1 = safe_int(row.get("Orden1")) if "Orden1" in df.columns else None
        orden2 = safe_int(row.get("Orden2")) if "Orden2" in df.columns else None

        item = {
            "id": id_value,
            "nombre": nombre,
            "tipo": tipo,
            "plan": planes,
            "ciudad": ciudad,
            "direccion": direccion,
            "telefono": telefono,
            "orden1": orden1,
            "orden2": orden2,
        }
        items.append(item)

    # Ordenar por prioridad (igual que estamos haciendo en el front)
    def safe_order(v):
        return v if isinstance(v, int) else 9999

    items.sort(
        key=lambda x: (
            safe_order(x.get("orden1")),
            safe_order(x.get("orden2")),
            x.get("nombre", ""),
        )
    )

    # Guardar JSON
    Path(OUTPUT_JSON).write_text(
        json.dumps(items, ensure_ascii=False, indent=2),
        encoding="utf-8"
    )
    print(f"✅ JSON generado: {OUTPUT_JSON}")
    print(f"Prestadores totales: {len(items)}")

if __name__ == "__main__":
    main()