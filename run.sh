#!/usr/bin/env bash
# ------------------------------------------------------------------
# WAC - Compilar y ejecutar la app en el emulador (sin Android Studio)
#
# Uso:   ./run.sh
# ------------------------------------------------------------------
set -e

export ANDROID_HOME="${ANDROID_HOME:-$HOME/Android/Sdk}"
export ANDROID_SDK_ROOT="$ANDROID_HOME"
export PATH="$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator:$PATH"

AVD="${AVD:-WAC_API35}"
cd "$(dirname "$0")"

# 1) Arranca el emulador si no hay ninguno conectado todavía
if ! adb devices | grep -qE "emulator-[0-9]+\s+device"; then
  echo ">> Arrancando emulador '$AVD'..."
  emulator -avd "$AVD" -no-snapshot-save -gpu auto >/tmp/wac-emulator.log 2>&1 &
  adb wait-for-device
  echo -n ">> Esperando a que arranque Android"
  until [ "$(adb shell getprop sys.boot_completed 2>/dev/null | tr -d '\r')" = "1" ]; do
    echo -n "."
    sleep 3
  done
  echo " listo."
fi

# 2) Compila e instala
echo ">> Compilando e instalando la app..."
./gradlew :app:installDebug

# 3) Lanza la app
echo ">> Lanzando WAC..."
adb shell am start -n com.emi.wac/.MainActivity

echo ">> Hecho. La app debería estar abierta en el emulador."
